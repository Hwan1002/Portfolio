
<h1>심리검사·상담 서비스 리뉴얼</h1>

<div class="readImg">
    <img src="readme-img/maumsarang-cover.jpg" alt="서비스 리뉴얼 프로젝트" />
</div>
<br/>
<h4 style="color:black; background-color:white; margin:0; padding:0;">레거시를 멈추지 않고, 새 스택으로 갈아타기 !</h4><br/>

<b>🏢 심리검사·상담 서비스의 레거시 시스템 현대화 (실무)</b><br/>

<div class="readLineheight">
 심리검사·상담 서비스의 운영 시스템은 오랫동안 Classic ASP로 운영되어 왔습니다.<br/>
 서비스를 멈추지 않은 채, 워크샵 관리 시스템과 관리자 백엔드를
 <b>React · TypeScript · Node.js(Fastify)</b> 스택으로 점진적으로 이관하는 프로젝트에
 주력 개발자로 참여하고 있습니다.
</div>
<br/>

<h4 style="color:black; background-color:white; margin:0; padding:0;">
    이 프로젝트가 어려운 이유
</h4>

<div class="readLineheight">
  운영 중인 시스템의 리뉴얼은 "새로 만들기"가 아니라 <b>"동작을 보존하며 옮기기"</b>입니다.<br/>
  기존 ASP와 새 시스템이 한동안 공존하기 때문에, 두 시스템의 처리 결과가
  항상 일치해야 하고(정합성 유지), 파일 처리처럼 아직 이관되지 않은 기능은
  레거시 ASP 엔드포인트와 병행 연동해야 합니다.
</div>
<br/>

<h4 style="color:black; background-color:white; margin:0; padding:0;">🖥️ 워크샵 관리 시스템 리뉴얼 — Frontend</h4>

<div class="readLineheight">
<b>"Classic ASP 화면을 React 19 + TypeScript 웹앱으로"</b><br/>
<ul>
    <li>교육(워크샵) 개설·관리, 강사 등록·승인, 수강생 관리를 담당하는 기관용 웹앱</li>
    <li><b>강사 등록·인증·승인 플로우</b> 전반을 신규 개발 — 자격증 기반 워크샵 종류 자동 동기화, 승인 상태별 분기 처리</li>
    <li>수강생 <b>엑셀 일괄 등록</b> 기능과 휴대폰번호 중복 등 데이터 검증 로직 구현</li>
    <li>회원가입 이메일 인증 플로우(중복 요청 방지, 기관명 검증)와 활동 내역 로그 화면 개발</li>
    <li>TanStack Query 커스텀 훅으로 서버 상태·페이지네이션을 표준화하고, 도메인별 feature 단위(api/useForm/ui)로 구조화</li>
    <li>파일 업로드 등 미이관 기능은 레거시 ASP와 프록시로 병행 연동 (점진적 마이그레이션)</li>
</ul>
</div>
<br/>

<h4 style="color:black; background-color:white; margin:0; padding:0;">⚙️ 관리자 백엔드 API — Backend</h4>

<div class="readLineheight">
<b>"ASP 관리자 페이지의 로직을 Fastify API로, 결과는 완전히 동일하게"</b><br/>
<ul>
    <li>주문·발송·운송장, 검사지(MMPI-3 등) 발주, 회원 관리, 캐시 양수도, 견적서, 알림톡/SMS/메일 발송 등 운영 전반의 API 개발</li>
    <li>결제(TossPayments) · ERP 전표(ECount) · 문자/메일(NHN Cloud) 등 <b>다수의 외부 시스템 연동</b> 및 장애 대응</li>
    <li>MSSQL 커넥션 풀과 트랜잭션 기반으로 대량 일괄처리(주문·운송장 업로드) 로직 구현</li>
</ul>
</div>
<br/>

<h4 style="color:black; background-color:white; margin:0; padding:0;">🔧 기억에 남는 트러블슈팅</h4>

<div class="readLineheight">
  <ul>
    <li><b>일괄처리 15초 타임아웃</b> — 트랜잭션 도중 별도 세션으로 조회가 섞여 락 대기가 발생하던 것을 트랜잭션 세션으로 통일해 해결</li>
    <li><b>ERP 전표 분리 오류</b> — 문화비 소득공제 대상/비대상 상품이 단일 전표로 합쳐지던 조회 쿼리 누락을 찾아 정합성 복구</li>
    <li><b>DB 드라이버 타입 바인딩</b> — int 컬럼을 VarChar로 바인딩해 발생하던 EPARAM 오류를 추적해 반복 패턴으로 정리·수정</li>
    <li><b>외부 API 지원 종료 대응</b> — SMS API 구 도메인 종료를 환경변수 기반 전환으로 무중단 대응</li>
    <li><b>외부 ERP 레이트리밋</b> — 일괄 주문등록 시 412 차단에 재시도·백오프 로직으로 안정화</li>
  </ul>
</div>
<br/>

<h1>
    <b>🛠️Tech Stack</b>
</h1>

<div class="readLineheight">
  <b>Frontend</b> : React 19, TypeScript, Vite, TanStack Query, Zustand, Tailwind CSS<br/>
  <b>Backend</b> : Node.js, Fastify, JWT, MSSQL, PostgreSQL<br/>
  <b>Infra / 협업</b> : Docker + GitHub Actions + AWS ECS(Fargate) 자동 배포 환경, AWS S3, Git 기반 코드리뷰
</div>

<br/>

<div class="readLineheight">
  ※ 사내 시스템 특성상 화면과 저장소는 공개할 수 없습니다.
</div>
<br/>

<b>✨ 멈추지 않는 서비스 위에서, 레거시를 미래로 !
</b>
