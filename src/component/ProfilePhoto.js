import { useEffect, useRef, useState } from "react";
import hwan from "../css/img/profile/hwan.jpg";

const EMOJIS = ["❤️", "❤️", "❤️", "❤️", "❤️", "❤️", "❤️", "❤️"];
const MESSAGES = [
  "안녕하세요! 👋",
  "방문해주셔서 감사해요 🙌",
  "아래 프로젝트도 구경해보세요 👀",
  "오늘도 즐겁게 코딩 중입니다 ☕",
  "같이 일하고 싶은 개발자가 되겠습니다 ✨",
];

const ProfilePhoto = () => {
  const [particles, setParticles] = useState([]);
  const [message, setMessage] = useState(null);
  const [pop, setPop] = useState(false);
  const clickCount = useRef(0);
  const particleId = useRef(0);
  const msgTimer = useRef(null);

  useEffect(() => () => clearTimeout(msgTimer.current), []);

  const handleClick = () => {
    clickCount.current += 1;

    // 이모지 파티클 burst
    const burst = Array.from({ length: 10 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 100 + Math.random() * 90;
      return {
        id: ++particleId.current,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        rot: (Math.random() - 0.5) * 360,
      };
    });
    const burstIds = new Set(burst.map((b) => b.id));
    setParticles((prev) => [...prev, ...burst]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !burstIds.has(p.id)));
    }, 950);

    // 사진 팝 애니메이션
    setPop(true);
    setTimeout(() => setPop(false), 400);

    // 말풍선 메시지 (10번째 클릭 이스터에그)
    const msg =
      clickCount.current === 10
        ? "🎉 벌써 10번째 클릭이에요! 이 정성이면 저 뽑으셔야 합니다"
        : MESSAGES[(clickCount.current - 1) % MESSAGES.length];
    setMessage(msg);
    clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(null), 2000);
  };

  return (
    <div className="profileWrap">
      {message && <div className="profileBubble">{message}</div>}
      <button
        className={`profileImg${pop ? " pop" : ""}`}
        onClick={handleClick}
        aria-label="프로필 사진 (클릭해보세요!)"
      >
        <img src={hwan} alt="장환석 프로필 사진" />
      </button>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            "--rot": `${p.rot}deg`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

export default ProfilePhoto;
