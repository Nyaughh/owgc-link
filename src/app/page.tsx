import { Icon } from '@/components/ui/icon'
import Main from './Main'

export default function Home() {
    return (
        <main className="w-screen h-screen">
            <div className="p-4 m-2 box border border-blue-400 flex flex-col items-start mx-auto relative max-h-[98%] max-w-[95%] md:max-w-[99%]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                <Main />
            </div>
        </main>
    )
}
