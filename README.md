﻿# Spyglass [NFT Hack 2022 Finalist]

![flipbook](images/flipbook.png)
Spyglass is an NFT curation tool featuring powerful real-time analytics and organizational tools built into a snappy UI. Use Spyglass to find the best NFTs on OpenSea before anyone else!

Spyglass was built for #NFTHack by ETH Global You can check out our project showcase page [here](https://showcase.ethglobal.com/nfthack2022/spyglass), which contains a video demo + live demo.

## Problem & Movitation

You know you want to buy into a collection, but there's 10k NFTs so finding the best one in the crowd can be stressful. You're under pressure to scoop it up before someone else does, but you're not really sure how to value each NFT. By the end of it you've probably got a couple of rarity tools and 100 OpenSea tabs open.

# How it's made

We used Zeplin to design the project and built the front-end with React and Redux. Node, Express, and MongoDB were used for the REST API server which syncs asset and collection data from the OpenSea API and appends it with price predictions and trait valuation scores from a machine learning model. The machine learning model was built with Python, Jupyter Notebook, and scikit-learn. We trained the model on the full sample of a collection, performing a 80:20 split. The algorithm used was the RandomForestRegressor.

# Team

![team](images/team.png)

Get in touch with the team:

- [@thisisnotawill](@thisisnotawill)
- [Daniel Muller](https://twitter.com/kartentaucher)
- [DavidMelnychuk](https://twitter.com/david_melnychuk)
- [Devendra Sawod](https://twitter.com/dsawod6)
- [Sudith Xavier](https://twitter.com/sudhithxavier)
