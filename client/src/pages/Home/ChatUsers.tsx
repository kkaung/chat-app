import React from 'react';

export default function ChatUsers() {
    const users = [
        {
            id: 1,
            name: 'Rose',
            profileImgUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            lastMsg: 'oky, call me.',
        },
        {
            id: 2,
            name: 'Ama',
            profileImgUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            lastMsg: 'I am still waiting ser',
        },
        {
            id: 3,
            name: 'Kyaw',
            profileImgUrl:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
            lastMsg: 'I am still waiting ser',
        },
    ];

    return (
        <div className="bg-cyan-500">
            {users.map(({ id, name, profileImgUrl, lastMsg }) => (
                <div key={id} className="flex py-2 px-3 cursor-pointer hover:bg-cyan-700">
                    <img
                        src={profileImgUrl}
                        className="w-[40px] h-[40px] bg-cover rounded-full mr-2"
                        alt={name}
                    />
                    <div>
                        <p className='text-sm'>{name}</p>
                        <p className='text-xs text-neutral-50'>{lastMsg}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
