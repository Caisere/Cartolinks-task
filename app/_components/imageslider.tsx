import Image from "next/image";



const imageContent = [
    {
        id: 1,
        title: 'WAN 2.2 Image Generation',
        description: 'Description for Image 1',
        imageUrl: '/bg1.jpg'
    },
    {
        id: 2,
        title: 'Flux.1 Krea',
        description: 'lorem ipsum',
        imageUrl: '/bg2.jpg'
    },
    {
        id: 3,
        title: 'Flux.1 Krea',
        description: 'lorem ipsum es ',
        imageUrl: '/bg3.jpg'
    }
];

function ImageSlider () {
    return (
        <main className="flex overflow-auto gap-4 max-w-full scrollbar-hidden">
            {imageContent.map((image) => (
                <div key={image.id} className="relative h-96 min-w-[700px] w-full">
                    <Image 
                        fill 
                        className="object-cover" 
                        src={image.imageUrl} 
                        alt={image.title} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <h2 className="text-white text-5xl font-bold">{image.title}</h2>
                        <p className="text-white text-2xl">{image.description}</p>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default ImageSlider;