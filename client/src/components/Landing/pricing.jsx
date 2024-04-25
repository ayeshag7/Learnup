export default function Pricing () {
  return (
    <div className="mx-12 my-20">
        <h1 className="text-4xl font-bold">
            <span className="bg-[#DBF6A4] text-[#052E33] dark:bg-[#6B8B40] dark:text-white px-2">Nos tarifs</span>
        </h1>
        <div className="flex flex-wrap gap-x-12 my-12">
            <div className="h-64 w-96 border border-[#06704D] rounded-lg px-8 py-6 bg-white dark:bg-[#2B3544]">
                <p className="text-2xl font-medium text-[#06704D] mb-2">Mensuel</p>
                <p className="text-4xl font-semibold mb-2">47 € /mois</p>
                <p className="">Vendez vos produits numériques et vos services sur learnup</p>
                <button className='border text-base font-medium px-12 py-2  border-[#1DBF73] bg-[#1DBF73] text-white rounded-md my-6'>
                S'abonner
                </button>
            </div>
            <div className="h-64 w-96 border border-[#06704D] rounded-lg px-8 py-6
            bg-white dark:bg-[#2B3544]">
                <p className="text-2xl font-medium text-[#06704D] mb-2">Trimestriel</p>
                <p className="text-4xl font-semibold text-black dark:text-white mb-2">97 € /3 mois</p>
                <p className="text-black dark:text-white">Vendez vos produits numériques et vos services sur learnup</p>
                <button className='border text-base font-medium px-12 py-2  border-[#1DBF73] bg-[#1DBF73] text-white rounded-md my-6'>
                S'abonner
                </button>
            </div>
            <div className="h-64 w-96 border border-[#06704D] rounded-lg px-8 py-6
            bg-white dark:bg-[#2B3544]">
                <p className="text-2xl font-medium text-[#06704D] mb-2">Annuel</p>
                <p className="text-4xl font-semibold text-black dark:text-white mb-2">247 € /an</p>
                <p className="text-black dark:text-white">Vendez vos produits numériques et vos services sur learnup</p>
                <button className='border text-base font-medium px-12 py-2  border-[#1DBF73] bg-[#1DBF73] text-white rounded-md my-6'>
                S'abonner
                </button>
            </div>
        </div>
    </div>
  )
}
