"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload, X, FileText } from "lucide-react";
import { useFileInput } from "@/hooks/use-file-input";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

export default function UploadInput({ createUserProfile }: {
    createUserProfile: (url: string) => Promise<void>
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const {
        fileName,
        fileInputRef,
        clearFile,
        error,
        validateAndSetFile,
        fileSize,
    } = useFileInput({ accept: ".pdf", maxSize: 5 }); // Limit to PDF files

    function handleFile(file: File) {
        validateAndSetFile(file);

        if (!error) {
            simulateUpload(file);
        }
    }

    function simulateUpload(file: File) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setPreview(null); // No preview for PDFs
            }
        }, 100);
    }

    async function UploadPDF(file: any) {

        if (file == null) return;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
        formData.append("resource_type", "raw"); // Specify 'raw' for PDFs

        setLoading(true);

        try {


            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();
            console.log(data);

            if (response.ok) {

                toast({
                    variant : "default",
                    title : "Upload Successful"
                });
                await createUserProfile(data.secure_url)

                toast({
                    variant : "default",
                    title : "OnBoarding Successful"
                });

            } else {
                toast({
                    variant : "destructive",
                    title : "Upload Failed",
                    description : data.error.message
                });
            }
        } catch (error: any) {
            toast({
                variant : "destructive",
                title : "An error occurred while uploading",
                description : error.message
            });
        } finally {
            setLoading(false);
        }
    }



    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (!droppedFile) return;

        handleFile(droppedFile);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        handleFile(selectedFile);
    }

    function removeFile() {
        clearFile();
        setPreview(null);
        setUploadProgress(0);
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="w-full space-y-2 bg-background px-10 py-6 border rounded-lg shadow-md">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Upload Resume
                </label>
                <div
                    className={cn(
                        "relative group cursor-pointer",
                        "rounded-lg border-2 border-dashed",
                        "transition-colors duration-200",
                        isDragging
                            ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10"
                            : "border-zinc-200 dark:border-zinc-800"
                    )}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            fileInputRef.current?.click();
                        }
                    }}
                    aria-label="Upload file"
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleChange}
                        className="hidden"
                    />

                    <div className="p-8 space-y-4">
                        {!fileName ? (
                            <div className="flex flex-col items-center gap-2">
                                <Upload className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    Drag and drop or click to upload
                                </p>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                    <FileText className="w-8 h-8 text-zinc-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">
                                        {fileName || "No file selected"}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {fileSize
                                            ? `${(fileSize / 1024 / 1024).toFixed(
                                                2
                                            )} MB`
                                            : "0 MB"}
                                    </p>
                                    {uploadProgress < 100 && (
                                        <div className="mt-2 h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-500 transition-all duration-200"
                                                style={{
                                                    width: `${uploadProgress}%`,
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile();
                                    }}
                                    className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
                                >
                                    <X className="w-5 h-5 text-zinc-400" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <Button
                disabled={loading || !fileName}
                className={cn(
                    loading && "bg-slate-600 text-slate-200 pointer-events-none"
                )}
                onClick={() => {
                    if (fileInputRef.current && fileInputRef.current.files)
                        UploadPDF(fileInputRef.current.files[0])
                }}
            >
                {loading ? "Loading... 📁" : "Submit Resume 📁"}
            </Button>


        </div>
    );
}
