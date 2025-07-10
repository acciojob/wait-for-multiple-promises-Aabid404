<script>
    function createRandomPromise(index) {
      return new Promise((resolve) => {
        const delay = Math.random() * 2000 + 1000;  // 1000ms–3000ms
        const start = performance.now();
        setTimeout(() => {
          const end = performance.now();
          const duration = (end - start) / 1000;  // seconds
          resolve({
            index,
            duration
          });
        }, delay);
      });
    }

    const output = document.getElementById('output');

    const promises = [
      createRandomPromise(1),
      createRandomPromise(2),
      createRandomPromise(3)
    ];

    const startTime = performance.now();

    Promise.all(promises).then(results => {
      const endTime = performance.now();
      const totalDuration = (endTime - startTime) / 1000;

      // Remove loading row
      output.innerHTML = '';

      // Add rows for each promise
      results.forEach(result => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = `Promise ${result.index}`;
        cell2.textContent = result.duration.toFixed(3);

        row.appendChild(cell1);
        row.appendChild(cell2);
        output.appendChild(row);
      });

      // Add total row
      const totalRow = document.createElement('tr');
      const totalCell1 = document.createElement('td');
      const totalCell2 = document.createElement('td');

      totalCell1.textContent = 'Total';
      totalCell2.textContent = totalDuration.toFixed(3);

      totalRow.appendChild(totalCell1);
      totalRow.appendChild(totalCell2);
      output.appendChild(totalRow);
    });
  </script>
