import Image from 'next/image';
import axios from 'axios';
import { getAllTodos } from '@/api';
import Header from './components/Header';

export default async function Home() {
	return (
		<div>
			<main className="relative">
				<section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
					<Header />
				</section>
			</main>
			<div className="fixed rounded-full bg-slate-900 bottom-4 right-4 flex items-center justify-center z-50 p-4 hover:bg-slate-300 duration-100">
				<a href="#" target="_blank" className="text-white font-semibold">
					Login
				</a>
			</div>
			<section className="relative mx-auto max-w-5xl  sm:px-6  overflow-hidden">
				<article className="md:flex">
					<div className="container mx-auto w-full h-full">
						<div className="relative wrap overflow-hidden h-full">
							<div
								className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
								style={{ left: '50%' }}
							></div>

							<div className="mb-8 flex justify-between items-center w-full right-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
									<h1 className="mx-auto font-semibold text-lg text-white">
										1
									</h1>
								</div>
								<div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
									<h3 className="mb-3 font-bold text-gray-700 text-xl">
										問題集を選択
									</h3>
									<p className="text-sm leading-snug tracking-wide text-gray-700 text-opacity-100">
										hogehogehoge
									</p>
									<img
										loading="lazy"
										src="/logo.png"
										alt="Logspot"
										className="h-20 w-20"
									/>
								</div>
							</div>

							<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
									<h1 className="mx-auto text-white font-semibold text-lg">
										2
									</h1>
								</div>
								<div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
									<h3 className="mb-3 font-bold text-gray-700 text-xl">
										チャレンジしたい問題を選択
									</h3>
									<p className="text-sm font-medium leading-snug tracking-wide text-gray-700 text-opacity-100">
										hogehogehoge
									</p>
									<img
										loading="lazy"
										src="/logo.png"
										alt="Logspot"
										className="h-20 w-20"
									/>
								</div>
							</div>

							<div className="mb-8 flex justify-between items-center w-full right-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
									<h1 className="mx-auto font-semibold text-lg text-white">
										3
									</h1>
								</div>
								<div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
									<h3 className="mb-3 font-bold text-gray-800 text-xl">
										エディタにコードを書く
									</h3>
									<p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
										hogehogehoge
									</p>
									<img
										loading="lazy"
										src="/logo.png"
										alt="Logspot"
										className="h-20 w-20"
									/>
								</div>
							</div>
							<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
								<div className="order-1 w-5/12"></div>
								<div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
									<h1 className="mx-auto text-white font-semibold text-lg">
										4
									</h1>
								</div>
								<div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
									<h3 className="mb-3 font-bold text-gray-700 text-xl">
										自分で書いたコードを判定する
									</h3>
									<p className="text-sm font-medium leading-snug tracking-wide text-gray-700 text-opacity-100">
										hogehogehoge
									</p>
									<img
										loading="lazy"
										src="/logo.png"
										alt="Logspot"
										className="h-20 w-20"
									/>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
			<footer className="px-4 sm:px-6 lg:px-8">
				<div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
					<div className="flex items-center justify-center space-x-5">
						<p className="mt-2 font-bold text-base leading-7 text-slate-600 ">
							利用規約
						</p>
						<p className="mt-2 font-bold text-base leading-7 text-slate-600 ">
							プライバシーポリシー
						</p>
						<p className="mt-2 font-bold text-base leading-7 text-slate-600 ">
							お問い合わせ
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
