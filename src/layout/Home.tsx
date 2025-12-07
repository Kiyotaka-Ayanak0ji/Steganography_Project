import Card from '../components/Card';
import encrypt from "../assets/image.png";
import object from "../assets/document1.png";
import decrypt from "../assets/decryption.png";

const Home = () => {
  const card_list = [
    {
      image: encrypt,
      content: "Encrypt plaintext by uploading a suitable cover image, and choose whether to add a secret while encrypting the plaintext."
    },
    {
      image: object,
      content: "The plaintext is encrypted along with the cover image using an encryption algorithm ,then stored as a stego object."
    },
    {
      image: decrypt,
      content: "Use the same key(secret used during encryption) to extract the plaintext from the stego object. This yeilds the plaintext."
    }
  ]
  return (
    <div className='flex flex-col gap-2 w-full items-center'>
      <div className='flex w-full font-mono mt-5 text-6xl items-center justify-center text-stone-700 dark:text-cyan-400'>
        Steganography
      </div>
      <div className='flex gap-20 flex-row h-60 items-center w-full mt-20 ml-96'>
        {
          card_list.map((card_prop) => (
            <Card image={card_prop.image} content={card_prop.content} key={card_list.indexOf(card_prop)} />
          ))
        }
        {/* <SkeletonCard/> */}
      </div>
    </div>
  )
}

export default Home