import { HeroParallax } from '@/Components/ui/hero-parallax';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    // Data produk untuk komponen HeroParallax
    const products = [
        {
            title: "Kopdar Jakarta",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn1.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta .1",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn2.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Bandung",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn3.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta Bu Retno",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn4.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta Lagi",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn5.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta Capai",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn6.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta IMSN",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn7.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta Tjikini",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn8.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },
        {
            title: "Kopdar Jakarta KapanLagi",
            link: "/product1",
            thumbnail: "/Image/imsn/imsn9.jpg", // Pastikan path ini sesuai dengan lokasi gambar
        },

        // Tambahkan produk lain sesuai kebutuhan
    ];

    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />

            {/* Memanggil komponen HeroParallax dan meneruskan data produk */}
            <HeroParallax products={products} />
        </>
    );
}
