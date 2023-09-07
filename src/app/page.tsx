import Image from 'next/image';
import axios from 'axios';
import { getAllTodos } from '@/api';
import Header from './components/Header';
import LoginButton from './components/LoginButton';
import TimeLine from './components/TimeLine';

export default async function Home() {
	return (
		<div>
			<main className="relative">
				<section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
					<Header />
				</section>
			</main>
			<LoginButton />
			<TimeLine />
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
