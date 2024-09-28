
const PublicationAPI = [
    {
        id:1,
        img : "img/publication/1.png",
        name : "Discrete-Time Quantum Walk on Multilayer Networks",
        member : "Mahesh N. Jayakody, Priodyuti Pradhan, Dana Ben Porath, Eliahu Cohen",
        det : "Entropy 25(12), 1610 (2023).",
        DOI : "10.3390/e25121610",
        link : "https://doi.org/10.3390/e25121610",
        arxiv: "https://arxiv.org/abs/2310.02722",
        // codes: "https://arxiv.org/abs/2310.02722",
        abstract : "A Multilayer network is a potent platform that paves the way for the study of the interactions among entities in various networks with multiple types of relationships. This study explores the dynamics of discrete-time quantum walks on a multilayer network. We derive a recurrence formula for the coefficients of the wave function of a quantum walker on an undirected graph with a finite number of nodes. By extending this formula to include extra layers, we develop a simulation model to describe the time evolution of the quantum walker on a multilayer network. The time-averaged probability and the return probability of the quantum walker are studied with Fourier, and Grover walks on multilayer networks. Furthermore, we analyze the impact of decoherence on quantum transport, shedding light on how environmental interactions may impact the behavior of quantum walkers on multilayer network structures."
    },
    {
        id:2,
        img : "img/publication/2.png",
        name : "Revisiting one-dimensional discrete-time quantum walks with general coin",
        member : "Mahesh N. Jayakody, Chandrakala Meena, Priodyuti Pradhan ",
        det : "Physics Open 17, 100189 (2023).",
        DOI : "10.1016/j.physo.2023.100189",
        link : "https://doi.org/10.1016/j.physo.2023.100189",
        arxiv: "https://arxiv.org/abs/2102.07207",
        codes: "https://github.com/priodyuti/QW_Line",
        abstract : "Quantum walk (QW) is the quantum analog of the random walk. QW is an integral part of the development of numerous quantum algorithms. Hence, an in-depth understanding of QW helps us to grasp the quantum algorithms. We revisit the one-dimensional discrete-time QW and discuss basic steps in detail by incorporating the most general coin operator, constant in both space and time, and a localized initial state using numerical modeling. We investigate the impact of each parameter of the general coin operator on the probability distribution of the quantum walker. We show that by tuning the parameters of the general coin, one can regulate the probability distribution of the walker. We provide an algorithm for the one-dimensional quantum walk driven by the general coin operator. The study on general coin operators also includes the popular coins — Hadamard, Grover, and Fourier."
    },
    {
        id:3,
        img : "img/publication/3.png",
        name : "Estimation of Correlation Matrices from Limited time series Data using Machine Learning",
        member : "Nikhil Easaw, Woo Soek, Prashant Singh Lohiya, Sarika Jalan, Priodyuti Pradhan",
        det : "Journal of Computational Science 71, 102053 (2023).",
        DOI : "10.1016/j.jocs.2023.102053",
        link : "https://doi.org/10.1016/j.jocs.2023.102053",
        arxiv: "https://arxiv.org/abs/2209.01198",
        abstract : "Correlation matrices contain a wide variety of spatio-temporal information about a dynamical system. Predicting correlation matrices from partial time series information of a few nodes characterizes the spatio-temporal dynamics of the entire underlying system. This information can help to predict the underlying network structure, e.g., inferring neuronal connections from spiking data, deducing causal dependencies between genes from expression data, and discovering long spatial range influences in climate variations. Traditional methods of predicting correlation matrices utilize time series data of all the nodes of the underlying networks. Here, we use a supervised machine learning technique to predict the correlation matrix of entire systems from finite time series information of a few randomly selected nodes. The accuracy of the prediction validates that only a limited time series of a subset of the entire system is enough to make good correlation matrix predictions. Furthermore, using an unsupervised learning algorithm, we furnish insights into the success of the predictions from our model. Finally, we employ the machine learning model developed here to real-world data sets."
    },
    {
        id:4,
        img : "img/publication/4.png",
        name : "From Spectra to Localized Networks: A Reverse Engineering Approach",
        member : "Priodyuti Pradhan, Sarika Jalan",
        det : "IEEE Transactions on Network Science and Engineering 7(4), 2020.",
        DOI : "10.1109/TNSE.2020.3008999",
        link : "https://ieeexplore.ieee.org/document/9140381",
        arxiv: "https://arxiv.org/abs/1810.00243",
        codes: "https://github.com/priodyuti/pev_loc_eigval_crossing",
        abstract : "Understanding the localization properties of eigenvectors of complex networks is important to get insight into various structural and dynamical properties of the corresponding systems. Here, we analytically develop a scheme to construct a highly localized network for a given set of networks parameters that is the number of nodes and the number of interactions. We find that the localization behavior of the principal eigenvector (PEV) of such a network is sensitive against a single edge rewiring. We find evidences for eigenvalue crossing phenomena as a consequence of the single edge rewiring, in turn providing an origin to the sensitive behavior of the PEV localization. These insights were then used to analytically construct the highly localized network for a given set of networks parameters. The analysis provides fundamental insight into relationships between the structural and the spectral properties of networks for PEV localized networks. Further, we substantiate the existence of the eigenvalue crossing phenomenon by considering a linear-dynamical process, namely the ribonucleic acid (RNA) neutral network population dynamical model. The analysis presented here on model networks aids in understanding the steady-state behavior of a broad range of linear-dynamical processes, from epidemic spreading to biochemical dynamics associated with the adjacency matrices."
    },
    {
        id:5,
        img : "img/publication/5.png",
        name : "Principal eigenvector localization and centrality in networks: Revisited",
        member : "Priodyuti Pradhan, Angeliya C.U., Sarika Jalan",
        det : "Physica A: Statistical Mechanics and its Applications 554, 124169, 2020.",
        DOI : "10.1016/j.physa.2020.124169",
        link : "https://www.sciencedirect.com/science/article/pii/S0378437120300200",
        arxiv: "https://arxiv.org/abs/1909.08696",
        codes: "https://github.com/priodyuti/pev_loc_in_evec_centrality",
        abstract : "Complex networks or graphs provide a powerful framework to understand importance of individuals and their interactions in real-world complex systems. Several graph theoretical measures have been introduced to access importance of the individual in systems represented by networks. Particularly, eigenvector centrality (EC) measure has been very popular due to its ability in measuring importance of the nodes based on not only number of interactions they acquire but also particular structural positions they have in the networks. Furthermore, the presence of certain structural features, such as the existence of high degree nodes in a network is recognized to induce localization transition of the principal eigenvector (PEV) of the network’s adjacency matrix. Localization of PEV has been shown to cause difficulties in assigning centrality weights to the nodes based on the EC. We revisit PEV localization and its relation with failure of EC problem, and by using simple model networks demonstrate that in addition to the localization of the PEV, the delocalization of PEV may also create difficulties for using EC as a measure to rank the nodes. Our investigation while providing fundamental insight to the relation between PEV localization and centrality of nodes in networks, suggests that for the networks having delocalized PEVs, it is better to use degree centrality measure to rank the nodes."
    },
    {
        id:6,
        img : "img/publication/6.png",
        name : "Localization of Multilayer networks by the optimized single-layer rewiring",
        member : "Sarika Jalan, Priodyuti Pradhan",
        det : "Phys. Rev. E 97, 042314, 2018.",
        DOI : "10.1103/PhysRevE.97.042314",
        link : "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.97.042314",
        arxiv: "https://arxiv.org/abs/1712.04829",
        codes: "https://github.com/priodyuti/multiplex_localization",
        abstract : "We study localization properties of principal eigenvectors (PEVs) of multilayer networks (MNs). Starting with a multilayer network corresponding to a delocalized PEV, we rewire the network edges using an optimization technique such that the PEV of the rewired multilayer network becomes more localized. The framework allows us to scrutinize structural and spectral properties of the networks at various localization points during the rewiring process. We show that rewiring only one layer is enough to attain a MN having a highly localized PEV. Our investigation reveals that a single edge rewiring of the optimized MN can lead to the complete delocalization of a highly localized PEV. This sensitivity in the localization behavior of PEVs is accompanied with the second largest eigenvalue lying very close to the largest one. This observation opens an avenue to gain a deeper insight into the origin of PEV localization of networks. Furthermore, analysis of multilayer networks constructed using real-world social and biological data shows that the localization properties of these real-world multilayer networks are in good agreement with the simulation results for the model multilayer network. This paper is relevant to applications that require understanding propagation of perturbation in multilayer networks."
    },
    {
        id:7,
        img : "img/publication/7.png",
        name : "Optimized evolution of networks for principal eigenvector localization,",
        member : "Priodyuti Pradhan, Alok Yadav, Sanjiv K. Dwivedi, Sarika Jalan",
        det : "Phys. Rev. E 96, 022312, 2017.",
        DOI : "10.1103/PhysRevE.96.022312",
        link : "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.96.022312",
        arxiv: "https://arxiv.org/abs/1701.03576",
        codes: "https://github.com/priodyuti/pev_localization",
        abstract : "Network science is increasingly being developed to get new insights about behavior and properties of complex systems represented in terms of nodes and interactions. One useful approach is investigating the localization properties of eigenvectors having diverse applications including disease-spreading phenomena in underlying networks. In this work, we evolve an initial random network with an edge rewiring optimization technique considering the inverse participation ratio as a fitness function. The evolution process yields a network having a localized principal eigenvector. We analyze various properties of the optimized networks and those obtained at the intermediate stage. Our investigations reveal the existence of a few special structural features of such optimized networks, for instance, the presence of a set of edges which are necessary for localization, and rewiring only one of them leads to complete delocalization of the principal eigenvector. Furthermore, we report that principal eigenvector localization is not a consequence of changes in a single network property and, preferably, requires the collective influence of various distinct structural as well as spectral features."
    },
    {
        id:8,
        img : "img/publication/8.png",
        name : "Wheel graph strategy for principal eigenvector localization of networks",
        member : "Sarika Jalan, Priodyuti Pradhan",
        det : "Europhysics Letter 129(4), (2020).",
        DOI : "10.1209/0295-5075/129/46002",
        link : "https://iopscience.iop.org/article/10.1209/0295-5075/129/46002",
        arxiv: "https://arxiv.org/abs/2003.01151",
        codes: "https://github.com/priodyuti/pev_loc_wheel_graph",
        abstract : "Investigation of eigenvector localization properties of complex networks is not only important for gaining insight into fundamental network problems such as network centrality measure, spectral partitioning, development of approximation algorithms, but is also crucial for understanding many real-world phenomena such as disease spreading, criticality in brain network dynamics. For a network, an eigenvector is said to be localized when most of its components take value near to zero, with a few components taking very high values. In this article, we devise a methodology to construct a principal eigenvector (PEV) localized network from a given input network. The methodology relies on adding a small component having a wheel graph to the given input network. By extensive numerical simulation and an analytical formulation based on the largest eigenvalue of the input network, we compute the size of the wheel graph required to localize the PEV of the combined network. Using the susceptible-infected-susceptible model, we demonstrate the success of this method for various models and real-world networks considered as input networks. We show that on such PEV localized networks, the disease gets localized within a small region of the network structure before the outbreaks. The study is relevant in controlling spreading processes on complex systems represented by networks."
    },
    {
        id:9,
        img : "img/publication/9.png",
        name : "Understanding cancer complexome using networks, spectral graph theory and multilayer framework,",
        member : "Aparna Rai, Priodyuti Pradhan, Jyothi Nagraj, K. Lohitesh, Rajdeep Chowdhury, Sarika Jalan",
        det : "Nature Scientific Reports 7, 41676 (2017).",
        DOI : "10.1038/srep41676",
        link : "https://doi.org/10.1038/srep41676",
        arxiv: "https://arxiv.org/abs/1701.06349",
        abstract : "Cancer complexome comprises a heterogeneous and multifactorial milieu that varies in cytology, physiology, signaling mechanisms and response to therapy. The combined framework of network theory and spectral graph theory along with the multilayer analysis provides a comprehensive approach to analyze the proteomic data of seven different cancers, namely, breast, oral, ovarian, cervical, lung, colon and prostate. Our analysis demonstrates that the protein-protein interaction networks of the normal and the cancerous tissues associated with the seven cancers have overall similar structural and spectral properties. However, few of these properties implicate unsystematic changes from the normal to the disease networks depicting difference in the interactions and highlighting changes in the complexity of different cancers. Importantly, analysis of common proteins of all the cancer networks reveals few proteins namely the sensors, which not only occupy significant position in all the layers but also have direct involvement in causing cancer. The prediction and analysis of miRNAs targeting these sensor proteins hint towards the possible role of these proteins in tumorigenesis. This novel approach helps in understanding cancer at the fundamental level and provides a clue to develop promising and nascent concept of single drug therapy for multiple diseases as well as personalized medicine."
    },
    {
        id:10,
        img : "img/publication/10.png",
        name : "Distributed Verification Protocols for Data Storage Security in Cloud Computing,",
        member : "Priodyuti Pradhan, P Syam Kumar, Gautam Mahapatra, R. Subramanian",
        det : "In IEEE conference ICCICT‑2012, 2012.",
        DOI : "10.1109/ICCICT.2012.6398205",
        link : "https://doi.org/10.1109/ICCICT.2012.6398205",
        arxiv: "https://arxiv.org/abs/2004.07079",
        abstract : "Recently, storage of huge volume of data into Cloud has become an effective trend in modern day Computing due to its dynamic nature. After storing, users delete their original copy of the data files. Therefore, users cannot directly control over that data. This lack of control introduce security issues in Cloud data storage, one of the most important security issue is integrity of the remotely stored data. Here, we propose a Distributed Algorithmic approach to address this problem with publicly probabilistic verifiable scheme. Due to heavy workload at the Third Party Auditor side, we distribute the verification task among various SUBTPAs. We use Sobol Random Sequence to generate the random block numbers that maintain the uniformity property. In addition, our method provide uniformity for each subtasks also. To make each subtask uniform, we use some analytical approach. For this uniformity, our protocols verify the integrity of the data very efficiently and quickly. Also, we provide special care about critical data by using Overlap Task Distribution Keys."
        
    },    
]

export default PublicationAPI;
