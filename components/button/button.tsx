const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <a
      href="/Salim Baktash Resume (1).pdf"
      target="_blank"
      className="my-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
    >
      {text}
    </a>
  );
};

export default Button;
