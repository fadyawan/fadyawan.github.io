import Link from 'next/link';

export default function ProductsAndServices() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Products and Services</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Creation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At FA Marketing, we specialize in creating high-quality content that captivates and engages your audience. Our Content Creation services include:
        </p>
        <ul className="list-disc list-inside pl-5 text-gray-700 mb-4">
          <li className="mb-2">Graphic Design: Custom visuals and designs to enhance your brand identity.</li>
          <li>Video Production: Professional video content to convey your message effectively and attract more viewers.</li>
        </ul>
        <div className="flex justify-center gap-4">
          <Link href="/products-and-services/graphic-design" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Explore Graphic Design
          </Link>
          <Link href="/products-and-services/video-production" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Explore Video Production
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Social Media Account Management</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our team manages your social media profiles to build your brand presence and engage with your audience. Our services include:
        </p>
        <ul className="list-disc list-inside pl-5 text-gray-700 mb-4">
          <li className="mb-2">Content Scheduling: Planning and posting content at optimal times to maximize engagement.</li>
          <li>Analytics and Reporting: Tracking performance and providing insights to improve your social media strategy.</li>
        </ul>
        <div className="flex justify-center">
          <Link href="/products-and-services/social-media-account-management" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Explore Social Media Management
          </Link>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Custom Websites</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We create and maintain custom websites tailored to your business needs. Our services include:
        </p>
        <ul className="list-disc list-inside pl-5 text-gray-700 mb-4">
          <li className="mb-2">Website Design: Crafting visually appealing and user-friendly websites.</li>
          <li className="mb-2">Website Development: Building responsive and functional websites that meet your business requirements.</li>
          <li>Ongoing Maintenance: Regular updates and support to ensure your website runs smoothly.</li>
        </ul>
        <div className="flex justify-center">
          <Link href="/products-and-services/website-service" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Explore Website Service
          </Link>
        </div>
      </section>
    </div>
  );
}
