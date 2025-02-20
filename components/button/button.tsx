const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="my-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
      {text}
    </button>
  );
};

export default Button;
