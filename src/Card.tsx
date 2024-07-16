import { useState } from "react";
import { Button, Input } from "antd";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p className="mb-2">
        <Input.TextArea placeholder="input something" rows={10} />
      </p>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Card;
