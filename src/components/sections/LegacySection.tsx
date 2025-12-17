import React from 'react';

const alumni = [
    { name: "Aditya R.", role: "Vocalist (2020)", current: "Berklee College of Music" },
    { name: "Priya S.", role: "Guitarist (2019)", current: "Indie Artist" },
    { name: "Rahul K.", role: "Drummer (2021)", current: "Session Musician" },
    { name: "Neha G.", role: "Keyboardist (2018)", current: "Music Producer" }
];

export const LegacySection = () => {
    return (
        <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-200">
                    Our Legacy
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {alumni.map((alum, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-3">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-2xl font-bold border border-gray-700">
                                {alum.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{alum.name}</h4>
                                <p className="text-sm text-purple-400">{alum.role}</p>
                                <p className="text-xs text-gray-500 mt-1">{alum.current}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">
                        Since its inception, Dhwani has been the heartbeat of BIT Mesra, nurturing talent and creating memories that echo through the halls.
                    </p>
                </div>
            </div>
        </section>
    );
};
