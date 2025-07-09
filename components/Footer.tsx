export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Vastu Harmony. All rights reserved.
      </div>
    </footer>
  );
}
