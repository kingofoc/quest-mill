import UserTGData from "@/components/UserTGData";
import UserBalance from "@/components/UserBalance";
import SpinCoin from "@/components/Spin";

export default function Home() {
  return (
    <div className="container">
      <header>
        <div className="user-card">
          <UserTGData />

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        </div>
        </div>
      </header>

      <main>
        <div className="user-balance">
          <UserBalance />
        </div>

        <div className="spin-container">
          <SpinCoin />
        </div>
      </main>
    </div>
  );
}
