export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }) {
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-400 text-black hover:bg-gray-500 focus:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded focus:outline-none focus:ring-2 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
