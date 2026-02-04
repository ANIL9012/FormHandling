import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom"
const Post = lazy(() => import("./Post"));

export default function Home() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about")
    }

    const [showPost, setShowPost] = useState(false);
    return (
        <div>
            <h2>Welcome to Home Page</h2>
            {showPost && (
                <Suspense fallback={<p>Loading post...</p>}>
                    <Post />
                </Suspense>
            )}
            <button onClick={() => setShowPost(true)}>Show Posts</button>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}