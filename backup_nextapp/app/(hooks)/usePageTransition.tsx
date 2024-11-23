"use client";

interface DocProps extends Document {
    startViewTransition?: (func: () => void) => void
}
const doc: DocProps = document;

export default function usePageTransition(call: () => void) {

    const handleTransition = () => {

        if (doc.startViewTransition) {
            doc.startViewTransition(() => call());
        } else call();

    }

    return handleTransition;
}
