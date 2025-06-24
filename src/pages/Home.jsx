import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomeHero from '../components/HomeHero/HomeHero';
import CatSlider from '../components/CatSlider/CatSlider';
import { ConnectedProductCard } from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { sampleProducts } from '../ProductData';

const Home = () => {
    const { t, i18n } = useTranslation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setError(null);
        // Use sampleProducts instead of API call
        setProducts(sampleProducts);
        setLoading(false);
    }, []);

    const handleViewProductDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    // Dummy handler for favorite toggle (if needed)
    const handleToggleFavorite = (productId) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    return (
        <>
            <Navbar />
            <HomeHero />
            <CatSlider />
            <div className="container my-5">
                <h2 className="text-start mb-4">{t('latestAddedProducts')}</h2>
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : error ? (
                    <div className="text-center text-danger">{error}</div>
                ) : (
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <ConnectedProductCard
                                    productData={product}
                                    isFavorite={favorites.includes(product.id)}
                                    onFavoriteClick={() => handleToggleFavorite(product.id)}
                                    onViewDetails={() => handleViewProductDetails(product.id)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Home;