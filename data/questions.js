export const questions = {
  easy: [
    {
      id: 1,
      heading: "Sunken Grotto Riddle",
      question: "You are in a dark sea cave with an oil lantern, a pile of dry seaweed, and a waterproof match. Which should you light first?",
      options: [
        "lantern",
        "seaweed",
        "matchstick",
        "non of above"
      ],
      correctAnswer: "matchstick"
    },
    {
      id: 2,
      heading: "Diver's Stash",
      question: "You find an old diver's stash: an oil lantern, a pile of dry driftwood, and a waterproof matchstick. Which should you light first?",
      options: [
        "lantern",
        "driftwood",
        "matchstick",
        "non of above"
      ],
      correctAnswer: "matchstick"
    },
    {
      id: 3,
      heading: "Merfolk Lineage",
      question: "In the Marine Matrix, a family of merfolk (P, Q, R, S, T, U, and V) rule the reef.\n● P is the father of Q.\n● Q is married to R.\n● S is the mother of T and is the daughter of P.\n● U is the brother of R.\n● V is the only son of T.\nHow is U related to V?",
      options: [
        "Maternal uncle",
        "Paternal uncle",
        "Grandfather",
        "Father"
      ],
      correctAnswer: "Maternal uncle"
    },
    {
      id: 4,
      heading: "Dolphin Ages",
      question: "A mother dolphin is 3 times older than her calf. In 15 years, she will be twice as old as her calf. How old is the calf now?",
      options: [
        "15",
        "5",
        "10",
        "45"
      ],
      correctAnswer: "15"
    },
    {
      id: 5,
      heading: "Submarine Navigation",
      question: "Your submarine starts at point O (the Sunken Cipher beacon) facing north. Then you do the following:\n Sail 5 km forward.\n Turn right and sail 3 km.\n Turn right again and sail 5 km.\n Turn left and sail 8 km.\n Finally, turn left and sail 4 km.\nIn which direction are you now from the starting point O?",
      options: [
        "North of the start",
        "East of the start",
        "North-East of the start",
        "South-East of the start"
      ],
      correctAnswer: "North-East of the start"
    }
  ],
  medium: [
    {
      id: 6,
      heading: "Orbital Dynamics • Medium (+20 pts)",
      question: "What is the minimum velocity required for a probe to break free from Earth's gravitational pull?",
      options: ["7.9 km/s", "11.2 km/s", "29.8 km/s", "3.4 km/s"],
      correctAnswer: "11.2 km/s"
    },
    {
      id: 7,
      heading: "Navigation Matrix • Medium (+20 pts)",
      question: "Which graph traversal algorithm guarantees the shortest path in an unweighted grid maze?",
      options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Kruskal's Algorithm", "Greedy Best-First"],
      correctAnswer: "Breadth-First Search (BFS)"
    },
    {
      id: 8,
      heading: "Deep Cosmos • Medium (+20 pts)",
      question: "What term describes a rapidly rotating neutron star that emits regular pulses of radiation?",
      options: ["Quasar", "Magnetar", "Pulsar", "White Dwarf"],
      correctAnswer: "Pulsar"
    },
    {
      id: 9,
      heading: "Data Structures • Medium (+20 pts)",
      question: "What is the worst-case time complexity of searching for a key in a balanced Binary Search Tree?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: "O(log n)"
    },
    {
      id: 10,
      heading: "Space Debris • Medium (+20 pts)",
      question: "What cascade effect occurs when high-density orbital space debris causes further collisions?",
      options: ["Kessler Syndrome", "Lagrange Drift", "Roche Limit", "Doppler Cascade"],
      correctAnswer: "Kessler Syndrome"
    }
  ],
  hard: [
    {
      id: 11,
      heading: "Astrodynamics • Hard (+30 pts)",
      question: "At what boundary around a massive body do tidal forces exceed the gravitational self-attraction of an orbiting satellite?",
      options: ["Schwarzschild Radius", "Roche Limit", "Chandrasekhar Limit", "Lagrangian Point L2"],
      correctAnswer: "Roche Limit"
    },
    {
      id: 12,
      heading: "Stellar Evolution • Hard (+30 pts)",
      question: "What is the maximum mass of a stable white dwarf star before electron degeneracy pressure fails?",
      options: ["1.44 Solar Masses", "3.20 Solar Masses", "0.85 Solar Masses", "2.17 Solar Masses"],
      correctAnswer: "1.44 Solar Masses"
    },
    {
      id: 13,
      heading: "Quantum Computing • Hard (+30 pts)",
      question: "In dynamic programming, solving the 0/1 Knapsack problem with N items and capacity W takes:",
      options: ["O(N log W)", "O(N · W)", "O(2^N)", "O(N² · W²)"],
      correctAnswer: "O(N · W)"
    },
    {
      id: 14,
      heading: "Deep Space Navigation • Hard (+30 pts)",
      question: "Which point in the Earth-Sun orbital system is ideal for deep-space telescopes like James Webb?",
      options: ["Lagrange Point L1", "Lagrange Point L2", "Lagrange Point L4", "Geosynchronous Orbit"],
      correctAnswer: "Lagrange Point L2"
    },
    {
      id: 15,
      heading: "Nexus Core • Hard (+30 pts)",
      question: "Which algorithm finds the shortest paths between all pairs of vertices in a weighted directed graph?",
      options: ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Prim's Algorithm", "Tarjan's Algorithm"],
      correctAnswer: "Floyd-Warshall Algorithm"
    }
  ]
};
