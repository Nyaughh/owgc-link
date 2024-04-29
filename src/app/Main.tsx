import Image from 'next/image'

const Main = () => {
    return (
        <div className="flex h-screen w-full bg-black bg-grid-white/[0.2] relative items-center justify-centermin-h-screen flex-col justify-between">
            <div className="relative flex items-center justify-center flex-grow space-y-2">
                {' '}
                {/* Added flex-grow and flex properties */}
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/overwatch.svg"
                    alt="Overwatch Logo"
                    width={300}
                    height={62}
                    priority
                />
            </div>

            <div className="mb-32 flex justify-center">
                <a
                    href="https://chat.whatsapp.com/Dbf2dE08gdAHA7wrSHVjil"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-lg flex items-center" // Added flex and items-center
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`font-semibold mr-2`}>Join</h2> {/* Added margin */}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Main
