import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

type KeyframePoint = { x: number; y: number; rotate: number };

export function generateAnimationPoints(
  start: KeyframePoint,
  end: KeyframePoint,
  stepSize: number
): KeyframePoint[] {
  const distance = Math.hypot(end.x - start.x, end.y - start.y);
  const steps = Math.max(1, Math.round(distance / stepSize));

  const points: KeyframePoint[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;

    const x = start.x + (end.x - start.x) * t;
    const y = start.y + (end.y - start.y) * t;
    const rotate = start.rotate + (end.rotate - start.rotate) * t;

    points.push({
      x: parseFloat(x.toFixed(2)),
      y: parseFloat(y.toFixed(2)),
      rotate: parseFloat(rotate.toFixed(2)),
    });
  }

  return points;
}

const Butterfly = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!ref.current || !scope.current) return;

    requestAnimationFrame(() => {
      const container = ref.current!;
      const { x, width } = container.getBoundingClientRect();
      const initialX = -(x + width / 2);
      const initialY = 180;
      const initialRotate = 90;

      const animateButterfly = async () => {
        animate(
          scope.current!,
          {
            x: initialX,
            y: initialY,
            rotate: initialRotate,
            opacity: 1,
          },
          { duration: 0 }
        );

        const points = generateAnimationPoints(
          { x: initialX, y: initialY, rotate: initialRotate },
          { x: -10, y: 180, rotate: 90 },
          10
        );

        const animations = [
          ...points,
          { x: 0, y: 180, rotate: 90 },
          { x: 10, y: 180, rotate: 90 },
          { x: 20, y: 170, rotate: 80 },
          { x: 30, y: 160, rotate: 70 },
          { x: 40, y: 150, rotate: 60 },
          { x: 50, y: 140, rotate: 50 },
          { x: 60, y: 130, rotate: 40 },
          { x: 60, y: 120, rotate: 30 },
          { x: 60, y: 110, rotate: 20 },
          { x: 60, y: 100, rotate: 10 },
          { x: 60, y: 90, rotate: 0 },
          { x: 60, y: 80, rotate: -10 },
          { x: 60, y: 70, rotate: -20 },
          { x: 55, y: 60, rotate: -30 },
          { x: 50, y: 50, rotate: -40 },
          { x: 40, y: 40, rotate: -41 },
          { x: 40, y: 30, rotate: -42 },
          { x: 30, y: 20, rotate: -43 },
          { x: 20, y: 10, rotate: -44 },
          { x: 10, y: 0, rotate: -45 },
          { x: 0, y: 0, rotate: -45 },
        ];

        (scope.current as HTMLDivElement).style.willChange = "transform";

        for (let i = 0; i < animations.length; i++) {
          await animate(scope.current!, animations[i], {
            duration: 0.02,
            ease: "linear",
          });
        }

        (scope.current as HTMLDivElement).style.willChange = "";
      };

      animateButterfly();
    });
  }, [animate, scope]);

  return (
    <div ref={ref}>
      <motion.div ref={scope} className="flex opacity-0 butterfly">
        <Image
          src="/home/butterfly.gif"
          alt="Illustration of butterfly"
          width={80}
          height={80}
          className="size-20 md:size-25 object-cover"
          priority
          unoptimized
        />
      </motion.div>
    </div>
  );
};
export default Butterfly;
