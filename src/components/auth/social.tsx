"use client";

import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex gap-x-2 justify-center items-cente w-full">
      <Button size="lg" className="w-full">
        Google
      </Button>
      <Button size="lg" className="w-full">
        Github
      </Button>
    </div>
  );
};
