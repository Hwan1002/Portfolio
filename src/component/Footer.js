import { useEffect, useRef, useState } from "react";

const EMAIL = "ladudae112@gmail.com";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 사용 불가 환경에서는 메일 클라이언트로 폴백
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer className="footer">
      <h3 className="footer_title">CONTACT</h3>
      <div className="footer_contact">
        <button className="footer_email" onClick={copyEmail} title="클릭하면 이메일 주소가 복사됩니다">
          {copied ? "이메일이 복사되었습니다 ✓" : `✉ ${EMAIL}`}
        </button>
        <a
          className="footer_github"
          href="https://github.com/Hwan1002"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="footer_copy">© {new Date().getFullYear()}. Jang Hwanseok. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
