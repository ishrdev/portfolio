type FigmaEmbedProps = {
  src: string;
  title?: string;
};

const FigmaEmbed: React.FC<FigmaEmbedProps> = ({
  src,
  title
}) => {
  return (
    <div className={`relative w-full pb-[56.25%]`}>
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full rounded-2xl outline-none border-0"
        allowFullScreen
        loading="eager"
      />
    </div>
  );
};

export default FigmaEmbed;
