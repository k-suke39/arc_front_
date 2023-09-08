'use client';
import React, { useRef } from 'react';
import Aside from '../../components/Aside';
import ChaptersHeader from '../../components/ChaptersHeader';
import Cards from '../../components/Cards';

const page = () => {
	return (
		<div>
			<main className="flex bg-slate-100 relative">
				<Aside />
				<section className="flex-grow">
					<ChaptersHeader />
				</section>
			</main>
		</div>
	);
};

export default page;
