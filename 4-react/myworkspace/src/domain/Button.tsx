import React from "react";

// Button 컴포넌트 생성
// <button ... JSX 엘리멘트를 반환하는 컴포넌트
// 속성 :
// color : 글자색("white", "black")
// backgroundColor: 배경색 ("red", "green", "blue")
// text :버튼의 텍스트 (대문자로 표시)

// Variant : 버튼 스타일 타입



interface ButtonProp {
  // color: "white" | "black";
  // backgroundColor: "red" | "green" | "blue";
  variant: "primary" | "secondary" | "warning";
  text: string;
}

const Button: React.FC<ButtonProp> = ({ variant, text }) => {
  let bgColor = "blue";
  let color = "black";

    switch (variant) {
      case "primary":
        bgColor = "blue";
        color = "white";
        break;
    
    case "secondary":
        bgColor = "gray";
        color = "black"
        break;
    
    case "warning":
        bgColor = "orange";
        color = "black"
        break;
  }

  return (
    <button
      style={{
        color: color,
        // backgroundColor: variant == "primary" ? "blue" : "gray", 방법1
        backgroundColor: bgColor,
      }}
    >
      {text.toUpperCase()}
    </button>
  );
};


export default Button;


