use titanic_jc10;
select * from train;

#Number of survivors by age group
SELECT 
			Survived,
            CASE
				WHEN Age <12 THEN 'Children'
                WHEN Age < 18 THEN 'Teenagers'
                WHEN Age < 50 THEN 'Adults'
                ELSE 'Seniors' END as age_group,
            count(Name) as total
			
FROM train

WHERE
			Pclass = 2 and
            Survived = 1
GROUP BY
			Survived,
            age_group
ORDER BY
			total;
            
            
#Survival Rate By Sex & Age Group            
            
SELECT 
			Sex,
            CASE
				WHEN Age <12 THEN 'Children'
                WHEN Age < 18 THEN 'Teenagers'
                WHEN Age < 50 THEN 'Adults'
                ELSE 'Seniors' END as age_group,
            count(Name) as total_passenger,
            sum(CASE
				WHEN Survived = 1 THEN 1
                ELSE 0 END) as total_survivors,
			(sum(CASE
				WHEN Survived = 1 THEN 1
                ELSE 0 END))/(count(Name)) as survival_rate
FROM train
GROUP BY
			Sex,
            age_group
ORDER BY
			5 desc;
            