import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { DialogButton } from "../components/DialogButton";

const MarryHistory: NextPage = () => {
  const [step, setStep] = useState(0);
  const [stepDialog, setStepDialog] = useState(0);
  const [orc, setOrc] = useState(true);
  const [marry, setMarry] = useState(true);
  return (
    <>
      {step === 0 && (
        <div className="h-screen dialog1 flex justify-center items-center flex-col relative">
          <div className="absolute left-0 top-43">
            <Image src="/mr.png" height={204} width={253} />
          </div>
          <div className="absolute right-0 top-43">
            {stepDialog === 1 && (
              <Image src="/fr.png" height={216} width={146} />
            )}

            {stepDialog >= 2 && (
              <Image src="/fl.png" height={224} width={216} />
            )}
          </div>

          <div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              if (stepDialog < 7) {
                setStepDialog(stepDialog + 1);
                // console.log(stepDialog);
              }
              if (stepDialog === 6) {
                setStep(step + 1);
              }
            }}
          >
            {stepDialog == 0 && (
              <DialogButton text="Há muito tempo atrás, um belo jovem estava andando por ai" />
            )}
            {stepDialog == 1 && (
              <DialogButton text="Quando uma bela jovem por ele aparece, ela não parecia feliz." />
            )}
            {stepDialog == 2 && (
              <DialogButton text="Olá, Moça, como você está?" Person="Felipe" />
            )}
            {stepDialog == 3 && (
              <DialogButton
                text="Olá, não estou muito bem, acabei de ser atacada por Orcs"
                Person="Anne Evelyn"
              />
            )}

            {stepDialog == 4 && (
              <DialogButton
                text="A região por perto está bem perigosa, não aconselho o senhor a passar por aqui."
                Person="Anne Evelyn"
              />
            )}

            {stepDialog == 5 && (
              <DialogButton
                text="Não se preocupe, podemos recuperar suas coisas, só me mostre o local !"
                Person="Felipe"
              />
            )}

            {stepDialog == 6 && (
              <DialogButton
                text="Tem certeza? o lugar é bastante perigoso, mas podemos tentar, porém ele estava sozinho !"
                Person="Anne Evelyn"
              />
            )}
          </div>
        </div>
      )}

      {step == 1 && (
        <div className="h-screen  flex justify-center items-center flex-col relative">
          <div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              if (stepDialog === 7) {
                setStep(step + 1);
              }
            }}
          >
            <DialogButton text="Depois de muita viagens, explorações e diversas navegações. Estava rolando um clima entre os grandes aventureiros." />
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="h-screen dialog2 flex justify-center items-center flex-col relative">
          <div className="absolute left-0 top-43">
            <Image src="/mr.png" height={204} width={253} />
          </div>
          <div className="absolute right-0 top-43">
            {stepDialog === 1 && (
              <Image src="/fr.png" height={216} width={146} />
            )}

            {stepDialog >= 2 && (
              <Image src="/fl.png" height={224} width={216} />
            )}
          </div>
          <div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              if (stepDialog < 9) {
                setStepDialog(stepDialog + 1);
                console.log(stepDialog);
              }

              if (stepDialog === 8) {
                setStep(step + 1);
              }
            }}
          >
            {stepDialog === 7 && (
              <DialogButton
                text="Aqui era o local, mas não faço ideia de onde o Orc se meteu."
                Person="Anne Evelyn"
              />
            )}
            {stepDialog === 8 && (
              <DialogButton
                text="Talvez ele tenha fugido quando eu apareci hahaha, mas vamos tomar cuidado."
                Person="Felipe"
              />
            )}
          </div>
        </div>
      )}
      {step == 3 && (
        <div className="h-screen battle flex justify-center items-center flex-col relative">
          {stepDialog === 15 && (
            <div
              className="bg-Dialog  w-[272px]  p-8 flex justify-center items-center flex-col text-center rounded-md "
              onClick={() => {
                setStepDialog(stepDialog + 1);
                console.log(`step`, step), console.log(stepDialog);
              }}
            >
              <Image src="/alliance.png" height={100} width={100} />
              <h1 className="mt-5">
                Você encontrou, uma aliança de casamento.
              </h1>
              <p>E você acaba se apaixonando por Anne Evelyn</p>
              <p>Aperta na aliança para continuar</p>
            </div>
          )}
          <div className="absolute left-0 top-43">
            {stepDialog <= 10 && (
              <Image src="/mr.png" height={204} width={253} />
            )}
          </div>
          <div className="absolute right-0 top-43">
            {stepDialog <= 10 && (
              <Image src="/fl.png" height={224} width={216} />
            )}
          </div>
          <div className="absolute right-24 top-32">
            {stepDialog <= 12 ? (
              <Image src="/orcimg.png" height={224} width={216} />
            ) : orc ? (
              <Image
                src="/deadorc.png"
                height={224}
                width={216}
                onClick={() => {
                  setStepDialog(stepDialog + 1);
                  console.log(stepDialog);
                  setOrc(false);
                }}
              />
            ) : null}
          </div>

          {/* <div className="absolute right-24 top-32">
            {stepDialog >= 13 && (
              <Image src="/deadorc.png" height={224} width={216} />
            )}
          </div> */}

          <div className="absolute right-8 bottom-8">
            {stepDialog > 10 && (
              <Image src="/battleguy.png" height={224} width={216} />
            )}
          </div>

          <div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              if (stepDialog < 14) {
                setStepDialog(stepDialog + 1);
                console.log(stepDialog);
              }
              if (stepDialog >= 16) {
                setStepDialog(stepDialog + 1);
                setStep(step + 1);
                console.log(stepDialog);
              }
            }}
          >
            {stepDialog === 8 && (
              <DialogButton
                text="Aqui era o local, mas não faço ideia de onde o Orc se meteu."
                Person="Anne Evelyn"
              />
            )}

            {stepDialog === 9 && (
              <DialogButton
                text="GURRR GURRRR !!!! GURRRRRRRR !!!!!!! GURRR GURRRR !!!! GURRRRRRRR !!!!!!!!!"
                Person="ORC"
              />
            )}

            {stepDialog === 10 && (
              <DialogButton
                text="Encontramos ele, por favor tenha cuidado !!"
                Person="Anne Evelyn"
              />
            )}

            {stepDialog === 11 && (
              <DialogButton text="Aperte Aqui para atacar" />
            )}

            {stepDialog === 12 && (
              <DialogButton text="Felipe Acerta ORC e Causa DANO FATAL!" />
            )}

            {stepDialog === 13 && (
              <DialogButton
                text="Obrigado, Você conseguiu!"
                Person="Anne Evelyn"
              />
            )}

            {stepDialog === 14 && (
              <DialogButton text="Aperte no ORC para Lootear" />
            )}

            {stepDialog === 16 && (
              <DialogButton text="Clique aqui para prosseguir" />
            )}
          </div>
        </div>
      )}

      {step == 4 && (
        <div className="h-screen battle flex justify-center items-center flex-col relative">
          <div className="absolute left-0 top-43">
            <Image src="/mr.png" height={204} width={253} />
          </div>
          <div className="absolute right-0 top-43">
            {stepDialog === 1 && (
              <Image src="/fr.png" height={216} width={146} />
            )}

            {stepDialog >= 2 && (
              <Image src="/fl.png" height={224} width={216} />
            )}
          </div>
          <div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              if (stepDialog === 20) {
                setStep(step + 1);
              }
              if (stepDialog <= 20) {
                setStepDialog(stepDialog + 1);
              }
            }}
          >
            {stepDialog === 17 && (
              <DialogButton
                text="Esse não era o Orc que estava com as suas coisas. Peço Perdão"
                Person="Felipe"
              />
            )}

            {stepDialog === 18 && (
              <DialogButton
                text="Porém, eu encontrei algo que faça sentido, nessa jornada enorme que tivemos."
                Person="Felipe"
              />
            )}

            {stepDialog === 19 && (
              <DialogButton
                text="Sempre quis te falar diversas coisas, mas eu acho melhor mostrar tudo que eu sinto em um ato!"
                Person="Felipe"
              />
            )}

            {stepDialog === 20 && (
              <DialogButton
                text="Sempre quis te falar diversas coisas, mas eu acho melhor mostrar tudo que eu sinto em um ato!"
                Person="Felipe"
              />
            )}
          </div>
        </div>
      )}

      {step == 5 && (
        <div className="h-screen battle flex justify-center items-center flex-col relative">
          <div className="absolute left-0 top-43">
            <Image src="/mr.png" height={204} width={253} />
          </div>
          <div className="absolute right-0 top-43">
            {stepDialog === 1 && (
              <Image src="/fr.png" height={216} width={146} />
            )}

            {stepDialog >= 2 && (
              <Image src="/fl.png" height={224} width={216} />
            )}
          </div>
          <div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              if (stepDialog < 23) {
                setStepDialog(stepDialog + 1);
              }

              if (stepDialog >= 23) {
                setStepDialog(stepDialog + 1);
              }
            }}
          >
            {stepDialog === 21 && (
              <DialogButton text="Toque aqui para continuar." Person="Felipe" />
            )}
            {stepDialog === 21 && (
              <video height="500" width="500" controls>
                <source src="/video.mp4" type="video/mp4" />
              </video>
            )}

            {stepDialog === 22 && (
              <DialogButton
                text="Você me proporciona momentos incríveis, e eu quero passar o resto da minha vida com você, eu te amo!"
                Person="Felipe"
              />
            )}

            {stepDialog === 23 && (
              <DialogButton text="Você aceita casar comigo?" Person="Felipe" />
            )}

            {stepDialog === 24 && (
              <DialogButton text="E assim o casal decidiu criar a sua história com grandes jornadas, um sempre pelo outro. " />
            )}
          </div>
          {stepDialog === 23 && (
            <div className="flex gap-4 text-3xl absolute">
              <button
                className="bg-Dialog text-3xl p-4"
                onClick={() => {
                  setMarry(true);
                  setStepDialog(stepDialog + 1);
                }}
              >
                Não
              </button>
              <button
                className="bg-Dialog text-3xl p-4"
                onClick={() => {
                  setMarry(false);
                  setStepDialog(stepDialog + 1);
                }}
              >
                Sim
              </button>
            </div>
          )}

          {stepDialog === 25 && (
            <div className="absolute h-screen w-screen bg-black flex flex-col justify-center items-center text-left p-5">
              <h1>
                Desenvolvido por Kayo, agradeço de coração por ter confiado em
                mim pra ter feito esse projeto tão importante, espero que tenham
                gostado =) e muita felicidades.
              </h1>

              <p>Minhas Redes Sociais</p>
              <a
                href="https://www.instagram.com/kayo_elias/"
                className="mt-8 bg-Dialog p-4 rounded-md"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/kayoeliasgverdan/"
                className="my-12 bg-Dialog p-4 rounded-md"
              >
                Linkedin
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MarryHistory;
