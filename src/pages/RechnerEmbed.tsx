import Calculator from '../components/Calculator';

export default function RechnerEmbed() {
  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-4 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <Calculator isEmbed={true} />
      </div>
    </div>
  );
}
