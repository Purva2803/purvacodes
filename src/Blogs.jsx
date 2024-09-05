import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs-container p-8 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-center">Blogs</h1>
            <div className="sections space-y-6">
                <div className="section p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Tech Blogs</h2>
                    <p className="text-gray-700">Explore the latest trends and insights in technology. From deep dives into new programming languages to reviews of the latest tech gadgets, this section covers it all.</p>
                </div>
                <div className="section p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">About Life</h2>
                    <p className="text-gray-700">Read personal stories and reflections on life. This section is dedicated to sharing experiences, lessons learned, and musings about everyday life.</p>
                </div>
                <div className="section p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Fiction Stories</h2>
                    <p className="text-gray-700">Dive into imaginative worlds and creative narratives. This section features short stories, creative writing pieces, and other forms of fiction that spark the imagination.</p>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
