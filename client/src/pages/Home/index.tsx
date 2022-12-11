import ChatDisplay from './ChatDisplay';
import ChatProfileHead from './ChatProfileHead';
import ChatSearchUser from './ChatSearchUser';
import ChatUsers from './ChatUsers';

export default function HomePage() {
    return (
        <div className="flex text-white h-full shadow-sm">
            <div className="w-[300px] bg-cyan-500/80 rounded-bl-md rounded-tl-md">
                <ChatProfileHead />
                <ChatSearchUser />
                <ChatUsers />
            </div>
            <ChatDisplay />
        </div>
    );
}
