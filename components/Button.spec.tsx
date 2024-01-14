import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Button } from "./Button";

it("버튼의 입력된 label과 같은 텍스트가 버튼에 출력되어야 한다.", () => {
  // Arrange - 환경 구성
  render(<Button label="버튼" />)

  // Action - 실행

  // Assert - 검증
  
})

it("버튼 누르면 action함수 실행되어야 한다.", () => {
  render(<Button label="버튼" />)

  
})