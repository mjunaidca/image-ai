import { Form } from "./sections/form";

export default function ImageGenerator() {
    return (
        // <div className="flex max-w-screen-2xl  w-full mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <main className="flex flex-1 w-screen flex-col items-center justify-center text-center px-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-9">
                    Generate your next Super Image in seconds
                </h1>
                <Form />
            </div>
        </main>
        // </div>
    );
}
