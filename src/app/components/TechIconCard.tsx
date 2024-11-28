export const TechIconCard = ({ src }: { src: string }) => {
    return (
        <div className="flex justify-center">
            <img className="max-h-[100%] flex my-auto p-5" src={src} alt="img" />
        </div>
    );
}