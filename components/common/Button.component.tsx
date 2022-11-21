import Link from "next/link";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface IButton {
  link?: string;
  children: ReactNode;
  onClick?: (e: any) => void;
  style?: object;
  className?: string;
  outline: boolean;
}

export const ButttonComponent: FC<IButton> = ({
  link,
  children,
  onClick,
  className,
  style,
  outline,

  ...props
}) => {
  if (link) {
    return (
      <Link href={link && link}>
        <CustomButton
          onClick={onClick}
          style={style && style}
          className={className}
          $outline={outline && outline}
        >
          <div>
            <p> {children}</p>
          </div>
        </CustomButton>
      </Link>
    );
  }
  return (
    <CustomButton
      onClick={onClick}
      style={style && style}
      className={className}
      $outline={outline && outline}
    >
      <div>
        <p>{children}</p>
      </div>
    </CustomButton>
  );
};

const CustomButton = styled.button<{ $outline: boolean }>`
  background: ${(props) =>props.$outline ? "var(--main-dark-blue)" : "white"};
  border-radius: ${(props) => (props.$outline ? "3rem" : "0")};
  border: ${(props) =>props.$outline ? "none" : "0.5px solid var(--main-border)"};
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) =>props.$outline ? "var(--main-white)" : "var(--main-greyish-dark-blue)"};
  transition: all 0.4s ease;
  margin: 1rem 0 1rem 0;
  cursor: pointer;
  p {
    padding: 2rem;
    letter-spacing: 5px !important;
  }
`;
