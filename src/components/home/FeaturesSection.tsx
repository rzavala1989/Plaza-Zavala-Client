import Image from 'next/image';

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 text-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Features</h2>
                <div className="flex justify-around flex-wrap">
                    <div className="text-center">
                        <div className="inline-block">
                            <Image src="/feature1.jpg" alt="Feature 1" width={300} height={200}
                                   className="rounded-lg shadow-md mx-auto"/>
                            <h3 className="text-xl font-semibold mt-4">Luxury Rooms</h3>
                            <p className="mt-2 w-full">Spacious and comfortable rooms with top-notch amenities.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="inline-block">
                            <Image src="/feature2.jpg" alt="Feature 2" width={300} height={200}
                                   className="rounded-lg shadow-md mx-auto"/>
                            <h3 className="text-xl font-semibold mt-4">Gourmet Dining</h3>
                            <p className="mt-2 w-full">Enjoy gourmet meals prepared by our world-class chefs.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="inline-block">
                            <Image src="/feature3.jpg" alt="Feature 3" width={300} height={200}
                                   className="rounded-lg shadow-md mx-auto"/>
                            <h3 className="text-xl font-semibold mt-4">Scenic Views</h3>
                            <p className="mt-2 w-full">Experience breathtaking views from your room.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
