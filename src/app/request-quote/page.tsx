import Script from "next/script";

export default function RequestQuotePage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
                <span>REQUEST A QUOTE PAGE</span>
            </div>
            <Script
                src="https://www.usevariantly.com/variantly.js"
                strategy="beforeInteractive"
            />
        </>
    )
}