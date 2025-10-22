export default function ContactPage() {
  return (
    <main className="container-content py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact IIFS</h1>
      <p className="mt-2 text-white/80">Reach out for partnerships, admissions, and media.</p>
      <form className="mt-8 grid md:grid-cols-2 gap-4 max-w-3xl">
        <input className="rounded-lg border border-white/20 bg-transparent px-4 py-3" placeholder="Full name"/>
        <input className="rounded-lg border border-white/20 bg-transparent px-4 py-3" placeholder="Email"/>
        <input className="rounded-lg border border-white/20 bg-transparent px-4 py-3 md:col-span-2" placeholder="Subject"/>
        <textarea className="rounded-lg border border-white/20 bg-transparent px-4 py-3 md:col-span-2" placeholder="Message" rows={6}></textarea>
        <button className="btn-primary md:col-span-2" type="button">Send</button>
      </form>
    </main>
  );
}
