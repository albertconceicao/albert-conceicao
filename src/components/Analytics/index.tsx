export function Analytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YX16ZZYDBB"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'G-YX16ZZYDBB');
        </script>
          `
        }}
      />
    </>
  );
}
