import React, { ReactNode } from "react";

interface CenteredBoxProps {
  children: ReactNode;
}

const CenteredBox: React.FC<CenteredBoxProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-4xl w-full px-6">{children}</div>
    </div>
  );
};

export default CenteredBox;
