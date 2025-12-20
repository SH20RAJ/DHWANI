"use client";

import React from 'react';

export const MusicSection = () => {
    return (
        <section className="py-20 bg-zinc-900 text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                        Our Sound
                    </h2>
                    <p className="text-gray-400">
                        Experience the rhythm and soul of Dhwani through our latest releases on SoundCloud.
                    </p>
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
                    <iframe
                        width="100%"
                        height="450"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1207990405&color=%23250c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                        className="rounded-xl"
                    ></iframe>
                    <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100, marginTop: '10px' }}>
                        <a href="https://soundcloud.com/dhwanibitmesra" title="Dhwani - Music Club, BIT Mesra" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Dhwani - Music Club, BIT Mesra</a> · <a href="https://soundcloud.com/dhwanibitmesra/sets/cttr" title="Chained To The Rhythm" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Chained To The Rhythm</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
