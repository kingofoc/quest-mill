// global.d.ts

declare global {
    interface Window {
      Telegram: {
        WebApp: {
          initDataUnsafe: {
            user: {
              username: string;
              photo_url: string;
            };
          };
          ready: () => void;
        };
      };
    }
  }
  
  export {};
  
