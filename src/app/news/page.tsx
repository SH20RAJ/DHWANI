"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export const newsItems = [
  {
    slug: "dhwani-originals-vol-1",
    category: "New Release",
    title: "Dhwani Originals Vol. 1 Drops This Friday",
    excerpt: "The long-awaited compilation album featuring 12 original tracks from our club members is finally here. Pre-save now.",
    date: "2 HOURS AGO",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop",
    size: "large",
    content: "After months of rigorous recording sessions, sleepless nights in the jam room, and countless coffee runs, Dhwani is proud to announce its first-ever compilation album. 'Dhwani Originals Vol. 1' features 12 tracks spanning genres from progressive metal to indie folk, all written, performed, and produced by students of BIT Mesra. The album will be available on all major streaming platforms starting this Friday."
  },
  {
    slug: "riot-wins-battle-of-bands",
    category: "Spotlight",
    title: "Interview: How 'The Riot' Won Battle of Bands",
    excerpt: "We sat down with the lead guitarist of our champion band to discuss their creative process and gear.",
    date: "1 DAY AGO",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2676&auto=format&fit=crop",
    size: "small",
    content: "It was a night to remember. The crowd was roaring, the amps were cranked to 11, and 'The Riot' delivered a performance that will be talked about for years. We caught up with the band backstage to ask them about their winning strategy, their influences, and what's next for the group."
  },
  {
    slug: "new-studio-monitors",
    category: "Gear Talk",
    title: "New Studio Monitor Setup in Jam Room",
    excerpt: "Thanks to the alumni fund, we've upgraded our listening experience with top-tier monitors.",
    date: "3 DAYS AGO",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop",
    size: "small",
    content: "The Dhwani jam room just got a major upgrade. With a generous donation from our alumni network, we've installed a pair of industry-standard studio monitors. This will allow our members to mix and master their tracks with precision, ensuring that the sound of Dhwani is clearer and more professional than ever before."
  },
  {
    slug: "mastering-workshop-recap",
    category: "Workshop",
    title: "Mastering the Mix: Weekend Workshop Recap",
    excerpt: "Key takeaways from our session with producer Amit Trivedi (Visiting Faculty).",
    date: "1 WEEK AGO",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670&auto=format&fit=crop",
    size: "wide",
    content: "Last weekend, we had the privilege of hosting renowned producer Amit Trivedi for a two-day workshop on music production. From EQ techniques to master bus compression, Amit shared his secrets for getting a pro-sounding mix. Here are the key takeaways for those who missed it."
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
       
       <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-20 border-b border-neutral-800 pb-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl md:text-9xl font-serif font-light tracking-tight mb-6"
              >
                  The <span className="italic font-bold">Resonance</span>
              </motion.h1>
              <div className="flex justify-between items-end">
                  <p className="text-neutral-500 max-w-lg font-mono text-sm leading-relaxed">
                      // OFFICIAL NEWSLETTER<br/>
                      Covering the noise, the melody, and everything in between since 1998.
                  </p>
                  <div className="hidden md:block text-right">
                      <div className="text-sm font-bold uppercase tracking-widest">Issue #42</div>
                      <div className="text-neutral-500 text-xs">Dec 30, 2025</div>
                  </div>
              </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
              {newsItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`
                        group relative bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-colors
                        ${item.size === 'large' ? 'md:col-span-8 md:row-span-2 min-h-[500px]' : ''}
                        ${item.size === 'small' ? 'md:col-span-4 min-h-[300px]' : ''}
                        ${item.size === 'wide' ? 'md:col-span-6 md:row-span-1 min-h-[350px]' : ''}
                        ${item.size === 'tall' ? 'md:col-span-3 md:row-span-2' : ''}
                    `}
                  >
                      {/* Image Background */}
                      <div className="absolute inset-0 z-0">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex flex-col justify-end h-full">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="flex items-center gap-2 mb-3">
                                <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">{item.category}</span>
                                <span className="text-neutral-400 text-[10px] font-mono flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.date}
                                </span>
                             </div>
                             
                             <h2 className={`
                                font-bold leading-tight mb-3 text-white group-hover:text-blue-200 transition-colors
                                ${item.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl'}
                             `}>
                                 {item.title}
                             </h2>
                             
                             <p className={`
                                text-neutral-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
                                ${item.size === 'small' ? 'text-sm' : 'text-base'}
                             `}>
                                 {item.excerpt}
                             </p>

                             <Link href={`/news/${item.slug}`} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors inline-flex">
                                 Read Article <ArrowUpRight className="w-4 h-4" />
                             </Link>
                          </div>
                      </div>
                  </motion.div>
              ))}
              
              {/* Subscribe Box */}
              <div className="md:col-span-6 bg-blue-600 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                   <div className="relative z-10">
                       <h3 className="text-3xl font-black uppercase italic mb-2">Don't Miss a Beat</h3>
                       <p className="text-blue-100 mb-6 max-w-md">Subscribe to get early access to tickets, exclusive merch drops, and behind-the-scenes content.</p>
                       <div className="flex gap-2">
                           <input type="email" placeholder="YOUR@EMAIL.COM" className="bg-blue-800/50 border border-blue-400 placeholder-blue-300 text-white px-4 py-3 w-full font-mono text-sm focus:outline-none focus:bg-blue-800" />
                           <button className="bg-white text-blue-600 px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-neutral-100 transition-colors">
                               Join
                           </button>
                       </div>
                   </div>
              </div>

          </div>
       </div>

    </main>
  );
}
