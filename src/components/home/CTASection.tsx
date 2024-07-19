import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold mb-4">Ready for a Memorable Stay?</h2>
                <p className="text-lg mb-8">Book your room now and enjoy an unforgettable experience at My Hotel.</p>
                <Link href="/book"
                      className="px-8 py-3 bg-accent text-lg font-semibold rounded-full shadow-lg hover:bg-accent-dark">
                    Book Now
                </Link>
            </div>
        </section>
    );
}
