import {
  Play,
  Sparkles,
  Zap,
  Camera,
  Edit3,
  Video,
  Repeat,
  BookOpen,
  House,
  Image,
  Pen,
  Brush,
  Hammer,
  Headset,
} from "lucide-react";
import type { FooterContent } from "../types";
import React, { ReactElement } from "react";

export const navigationIcons: ReactElement[] = [
  <House key="house" width={18} height={18} />,
  <Image key="image" width={18} height={18} alt="image" />,
  <Video key="video" width={18} height={18} />,
  <Pen key="pen" width={18} height={18} />,
  <Brush key="brush" width={18} height={18} />,
  <Hammer key="hammer" width={18} height={18} />,
  <Camera key="camera" width={18} height={18} />,
];

export const footerContents: FooterContent[] = [
  {
    icon: <Camera width={18} height={18} />,
    title: "Image",
    subtitle:
      "Generate stunning visuals with custom styles in Flux and Ideogram",
    tag: true,
    color: "bg-blue-600",
  },
  {
    icon: <Video width={18} height={18} />,
    title: "Video",
    subtitle: "Generate videos with Haiku, Pika, Runway Luma, and more.",
    tag: false,
    color: "bg-orange-500",
  },
  {
    icon: <Zap width={18} height={18} />,
    title: "Realtime",
    subtitle: "Real-time rendering as a canvas. Instant feedback loops.",
    tag: false,
    color: "bg-cyan-500",
  },
  {
    icon: <Sparkles width={18} height={18} />,
    title: "Enhancer",
    subtitle: "Upscale and enhance images and videos up to 25x.",
    tag: true,
    color: "bg-gray-900",
  },
  {
    icon: <Edit3 width={18} height={18} />,
    title: "Edit",
    subtitle: "Effortlessly edit whole or expand photos and generations.",
    tag: true,
    color: "bg-purple-600",
  },
  {
    icon: <Play width={18} height={18} />,
    title: "Video Lipsync",
    subtitle: "Lip sync any video to any audio.",
    tag: true,
    color: "bg-green-600",
  },
  {
    icon: <Repeat width={18} height={18} />,
    title: "Motion Transfer",
    subtitle: "Transfer motion from one video and animate characters.",
    tag: true,
    color: "bg-gray-900",
  },
  {
    icon: <BookOpen width={18} height={18} />,
    title: "Train",
    subtitle: "Train your own LoRAs and style embeddings, or characters.",
    tag: false,
    color: "bg-pink-600",
  },
];
