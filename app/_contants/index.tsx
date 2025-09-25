import { ChevronLeft, ChevronRight, Play, ExternalLink, Sparkles, Zap, Users, Camera, Edit3, Video, Repeat, BookOpen, House, Image, Pen, Brush, Hammer, Headset  } from 'lucide-react';
import type { FooterContent  } from '../types';
import React, { ReactElement } from 'react';


export const navigationIcons: ReactElement[] = [
    <House />,
    <Image className="w-6 h-6" />,
    <Video className="w-6 h-6" />,
    <Pen className="w-6 h-6" />,
    <Brush className="w-6 h-6" />,
    <Hammer className="w-6 h-6" />,
    <Camera className="w-6 h-6" />,
]

export const footerContents: FooterContent[] = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Image",
      subtitle: "Generate stunning visuals with custom styles in Flux and Ideogram",
      tag: true,
      color: "bg-blue-600"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video",
      subtitle: "Generate videos with Haiku, Pika, Runway Luma, and more.",
      tag: false,
      color: "bg-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Realtime",
      subtitle: "Real-time rendering as a canvas. Instant feedback loops.",
      tag: false,
      color: "bg-cyan-500"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Enhancer",
      subtitle: "Upscale and enhance images and videos up to 25x.",
      tag: true,
      color: "bg-gray-900"
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Edit",
      subtitle: "Effortlessly edit whole or expand photos and generations.",
      tag: true,
      color: "bg-purple-600"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Video Lipsync",
      subtitle: "Lip sync any video to any audio.",
      tag: true,
      color: "bg-green-600"
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Motion Transfer",
      subtitle: "Transfer motion from one video and animate characters.",
      tag: true,
      color: "bg-gray-900"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Train",
      subtitle: "Train your own LoRAs and style embeddings, or characters.",
      tag: false,
      color: "bg-pink-600"
    }
];